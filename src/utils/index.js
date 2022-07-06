const mapCategoriesParams = {
    "women's-clothing": "womens-clothing",
    "men's-clothing": "mens-clothing",
}

export const generateCategoriesData = (categories) => {
    return categories.map((category, indx) => ({ 
        displayValue: category,
        value: !!mapCategoriesParams[category.split(" ").join("-")] ? mapCategoriesParams[category.split(" ").join("-")] : category.split(" ").join("-")
    }))
}