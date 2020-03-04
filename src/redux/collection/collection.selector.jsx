import{createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
) 

export const selectCollectionforCollectionPage = (getUrlParamCollectionId) => 
    createSelector(
        [selectCollections],
        collections => collections[getUrlParamCollectionId]
        )

export const selectItemforDetailItem = (getUrlParamCollectionId,getUrlParamItemId) => 
    createSelector(
        [selectCollections],
        collection => collection[getUrlParamCollectionId].items.find(item => 
            item.id == getUrlParamItemId
        )
    )
