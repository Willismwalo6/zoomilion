import { useEffect, useMemo, useState } from 'react';
import type { Category, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Close } from './Icons';

interface CatalogueProps {
  items: Product[];
  groups: string[];
  /** Show the tractor / implements switch (used by the all-products view). */
  showCategory?: boolean;
  searchPlaceholder?: string;
}

type CategoryFilter = 'all' | Category;

export function Catalogue({ items, groups, showCategory = false, searchPlaceholder }: CatalogueProps) {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('All');
  const [category, setCategory] = useState<CategoryFilter>('all');

  const visibleGroups = useMemo(() => {
    if (!showCategory || category === 'all') return groups;
    return ['All', ...Array.from(new Set(items.filter((p) => p.category === category).map((p) => p.group)))];
  }, [category, groups, items, showCategory]);

  useEffect(() => {
    setGroup('All');
  }, [category]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items.filter((product) => {
      if (showCategory && category !== 'all' && product.category !== category) return false;
      if (group !== 'All' && product.group !== group) return false;
      if (!needle) return true;
      return [product.name, product.group, product.brand, product.horsepower, product.drive, product.summary]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(needle);
    });
  }, [category, group, items, query, showCategory]);

  const reset = () => {
    setQuery('');
    setGroup('All');
    setCategory('all');
  };

  return (
    <div className="catalogue">
      <div className="catalogue__toolbar">
        <div className="search-field">
          <Search size={17} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder ?? 'Search products, models or horsepower'}
            aria-label="Search the product catalogue"
          />
          {query && (
            <button type="button" className="search-field__clear" onClick={() => setQuery('')} aria-label="Clear search">
              <Close size={14} />
            </button>
          )}
        </div>
        <p className="catalogue__count" aria-live="polite">
          <strong>{results.length}</strong> {results.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      <div className="catalogue__filters">
        {showCategory && (
          <div className="filter-row" role="group" aria-label="Filter by category">
            {(['all', 'tractors', 'implements'] as CategoryFilter[]).map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-chip${category === value ? ' is-active' : ''}`}
                onClick={() => setCategory(value)}
              >
                {value === 'all' ? 'All machinery' : value === 'tractors' ? 'Tractors' : 'Implements'}
              </button>
            ))}
          </div>
        )}

        {visibleGroups.length > 2 && (
          <div className="filter-row" role="group" aria-label="Filter by product type">
            {visibleGroups.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-chip filter-chip--soft${group === value ? ' is-active' : ''}`}
                onClick={() => setGroup(value)}
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>

      {results.length > 0 ? (
        <div className="product-grid">
          {results.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="catalogue__empty">
          <h3>No machinery matches that search</h3>
          <p>Try a different model, implement type or horsepower — or clear the filters to see everything.</p>
          <button type="button" className="btn btn--ghost btn--sm" onClick={reset}>
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
