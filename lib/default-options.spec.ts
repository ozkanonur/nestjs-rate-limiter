import { defaultRateLimiterOptions } from './default-options';

describe('defaultRateLimiterOptions', () => {
    it('should validate that defaultRateLimiterOptions exists', async () => {
        expect(defaultRateLimiterOptions).toBeDefined();
    });

    it('should validate the defaultRateLimiterOptions', async () => {
        expect(defaultRateLimiterOptions.for).toBe('Express');
        expect(defaultRateLimiterOptions.type).toBe('Memory');
        expect(defaultRateLimiterOptions.keyPrefix).toBe('global');
        expect(defaultRateLimiterOptions.points).toBe(4);
        expect(defaultRateLimiterOptions.pointsConsumed).toBe(1);
        expect(defaultRateLimiterOptions.inmemoryBlockOnConsumed).toBe(0);
        expect(defaultRateLimiterOptions.duration).toBe(1);
        expect(defaultRateLimiterOptions.blockDuration).toBe(0);
        expect(defaultRateLimiterOptions.inmemoryBlockDuration).toBe(0);
        expect(defaultRateLimiterOptions.queueEnabled).toBe(false);
        expect(defaultRateLimiterOptions.whiteList.length).toBe(0);
        expect(defaultRateLimiterOptions.blackList.length).toBe(0);
        expect(defaultRateLimiterOptions.storeClient).toBeUndefined();
        expect(defaultRateLimiterOptions.insuranceLimiter).toBeUndefined();
        expect(defaultRateLimiterOptions.dbName).toBe('rate-limiter');
        expect(defaultRateLimiterOptions.tableName).toBeUndefined();
        expect(defaultRateLimiterOptions.tableCreated).toBeUndefined();
        expect(defaultRateLimiterOptions.clearExpiredByTimeout).toBeUndefined();
        expect(defaultRateLimiterOptions.execEvenly).toBe( false );
        expect(defaultRateLimiterOptions.execEvenlyMinDelayMs).toBeUndefined();
        expect(Object.keys(defaultRateLimiterOptions.indexKeyPrefix).length).toBe(0);
        expect(defaultRateLimiterOptions.maxQueueSize).toBe(100);
        expect(defaultRateLimiterOptions.errorMessage).toBe('Rate limit exceeded');
    });
});