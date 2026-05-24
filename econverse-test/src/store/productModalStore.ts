import { create } from "zustand";

import type { ProductType } from "../types/productType";

type ProductModalStore = {
    isOpen: boolean;
    selectedProduct: ProductType | null;
    openModal: (product: ProductType) => void;
    closeModal: () => void;
};

export const useProductModalStore =
    create<ProductModalStore>((set) => ({
        isOpen: false,
        selectedProduct: null,

        openModal: (product) =>
            set({
                isOpen: true,
                selectedProduct: product
            }),

        closeModal: () =>
            set({
                isOpen: false,
                selectedProduct: null
            })
    })
);
