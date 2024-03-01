export interface IModelReader<T> {
  getAll(): Promise<T[]>,
  getById(id: string): Promise<T | null>
}
export interface IModelWriter<T> {
  create(data: Omit<T, 'id'>): Promise<T>;
  update(data: T): Promise<T>
}
export interface IModelDeleter {
  delete(id: string): Promise<boolean>
}

export interface IModel<T> extends IModelDeleter, IModelReader<T>, IModelWriter<T> { }
