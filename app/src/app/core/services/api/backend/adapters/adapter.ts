/**
 * Adapter to convert API data to model object
 */
export abstract class ApiAdapter<T> {
  /**
   * Transform json to a <T>Object
   */
  abstract get(json, ...args): T;

  /**
   * Transform json to a list of <T>Object
   */
  list(json, ...args): T[] {
    if (!json) {
      return [];
    }

    return json.map((it) => this.get(it, ...args));
  }
}
