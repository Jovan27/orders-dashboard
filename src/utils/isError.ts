export default (error: unknown): error is Error => error instanceof Error && 'message' in error;
