import { fireEvent, render, screen } from "@testing-library/react";
import Weather from "../Components/ProductList";
import { IResponse } from "../Components/ProductList";
global.fetch = jest.fn();

test("Product list test", async () => {
    const response: IResponse = {
        limit : "1",
        products : [{
            id: 1,
            images: [''],
            price : '3234',
            title: 'test title'
        }],
        skip: '',
        total: ''
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => response,
    });
    render (<Weather />)    
    const productTitle = await screen.findByText('test title')
    expect(productTitle).toBeInTheDocument()

})