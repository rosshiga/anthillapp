'use strict';
/**
 * Write your transction processor functions here
 */
 function RequestToOffice(orderRequest){
 	var oSheet = orderRequest.requestToOffice;
  orderRequest.productID = oSheet.productId;
  orderRequest.dateReceived = '' + new Date(); //Current time
  //Setting request cost and info using osheet, we should talk about eliminating the double or
  // what these fields should do.
  orderRequest.cost = oSheet.cost;
  orderRequest.amount = oSheet.amount;
  orderRequest.group = oSheet.group;
  //Update one of the dates on the oSheet
    var assetRegistry;
    var id = oSheet.orderId;
    return getAssetRegistry('org.acme.anthill.OrderSheet')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(oSheetbyID) {
            oSheetbyID.dateReceived = orderRequest.dateReceived;
            return assetRegistry.update(asset);
        });

 }
/**
 * Sample transaction
 * @param {org.acme.anthill.ChangeAssetValue} changeAssetValue
 * @transaction
 */
function onChangeAssetValue(changeAssetValue) {
    var assetRegistry;
    var id = changeAssetValue.relatedAsset.assetId;
    return getAssetRegistry('org.acme.anthill.SampleAsset')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.value = changeAssetValue.newValue;
            return assetRegistry.update(asset);
        });
}
