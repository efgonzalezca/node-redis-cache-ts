import { CacheRepository } from '../types';

export class InMemoryCacheRepository<T> implements CacheRepository<T> {
  private cache: Map<string, { value: T, expiresAt: number }> = new Map();

  async get(key: string): Promise<T | null> {
    const item = this.cache.get(key);
    if (item && (item.expiresAt === 0 || item.expiresAt > Date.now())) {
      return item.value;
    }
    this.cache.delete(key);
    return null;
  }

  async set(key: string, value: T, ttl: number = 0): Promise<void> {
    const expiresAt = ttl > 0 ? Date.now() + ttl * 1000 : 0;
    this.cache.set(key, { value, expiresAt });
  }

  async delete(key: string): Promise<void> {
    this.cache.delete(key);
  }
}