import { firstValueFrom, Observable } from 'rxjs';

export class ObservableUtils {
	public static async getFirstResponse<T>(source: Observable<T>): Promise<T> {
		return await firstValueFrom(source);
	}
}
