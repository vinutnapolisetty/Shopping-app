import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShoppingItem } from "./shopping-list-types";

@Injectable({
    providedIn: 'root'
})
export class ShoppingService{
    private apiUrl ="http://localhost:8080/api/shopping";

    constructor(private http:HttpClient) {}

    getItems() : Observable<ShoppingItem[]>{
        return this.http.get<ShoppingItem[]>(`${this.apiUrl}/items`);
        
    }

    getItemsByCategory(category: string) : Observable<ShoppingItem[]>{
        return this.http.get<ShoppingItem[]>(`${this.apiUrl}/items/category/${category}`);
    }

    //Post new item
    addItem(item: Omit<ShoppingItem, 'id'>) : Observable<ShoppingItem>{
        return this.http.post<ShoppingItem>(`${this.apiUrl}/items`, item);
    }

    //PUT update item
    updateItem(item: ShoppingItem) : Observable<ShoppingItem>{
        return this.http.put<ShoppingItem>(`${this.apiUrl}/items/${item.id}`, item);
    }

    //DELETE item
    deleteItem(id: number) : Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/items/${id}`);
    }

    //update purchased status
    updatePurchasedStatus(id: number, isPurchased: boolean) : Observable<ShoppingItem>{
        return this.http.patch<ShoppingItem>(`${this.apiUrl}/items/${id}/purchasedStatus`, {isPurchased});
    }
}