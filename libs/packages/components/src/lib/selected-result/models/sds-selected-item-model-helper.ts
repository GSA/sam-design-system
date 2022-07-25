import { SDSSelectedItemModel } from './sds-selectedItem.model';

export class SDSSelectedItemModelHelper {
  /**
   *  adds an item to the collection
   * if selected mode is single it removes any existing items
   * also checks to see if that item already exists
   * keyfield is used to determine uniqueness of the item added
   * @param itemToAdd
   * @param keyField
   * @param selectionMode
   * @param items
   */
  public static addItem(
    itemToAdd: object,
    keyField: string,
    selectionMode: SelectionMode,
    model: SDSSelectedItemModel
  ) {
    if (
      !SDSSelectedItemModelHelper.containsItem(
        itemToAdd[keyField],
        keyField,
        model.items
      )
    ) {
      if (selectionMode === SelectionMode.SINGLE) {
        SDSSelectedItemModelHelper.clearItems(model.items);
      }
      model.items.push(itemToAdd);
    }
  }

  /**
   * adds an array of items to the list and will not add duplicate items
   * keyfield is used to determine uniqueness of the item added
   * @param toAddItems
   * @param keyField
   * @param selectionMode
   * @param items
   */
  public static addItems(
    toAddItems: object[],
    keyField: string,
    selectionMode: SelectionMode,
    model: SDSSelectedItemModel
  ) {
    for (let i = 0; i < toAddItems.length; i++) {
      SDSSelectedItemModelHelper.addItem(
        toAddItems[i],
        keyField,
        selectionMode,
        model
      );
    }
  }

  /**
   * removes the item from the list
   * keyfield is used to determine uniqueness of the item added
   * @param item
   * @param keyField
   * @param items
   */
  public static removeItem(
    item: object,
    keyField: string,
    model: SDSSelectedItemModel
  ) {
    if (
      SDSSelectedItemModelHelper.containsItem(
        item[keyField],
        keyField,
        model.items
      )
    ) {
      model.items.splice(model.items.indexOf(item), 1);
    }
  }

  /**
   * checks to see if a particular item exists by the provied key
   * keyfield is used to determine uniqueness of the item added
   * @param key
   * @param keyField
   * @param items
   */
  public static containsItem(
    key: string,
    keyField: string,
    items: object[]
  ): boolean {
    let item = items.find((o) => o[keyField] === key);
    return item !== null && item !== undefined;
  }

  /**
   * Clears the list of items
   * @param items
   */
  public static clearItems(items: object[]) {
    while (items.length > 0) {
      items.pop();
    }
  }

  /**
   * updates an array of items to the list and will not add duplicate items
   * keyfield is used to determine uniqueness of the item added
   * @param selectedItems
   * @param keyField
   * @param selectionMode
   * @param items
   */
  public static replaceItems(
    selectedItems: object[],
    keyField: string,
    selectionMode: SelectionMode,
    model: SDSSelectedItemModel
  ) {
    //Clears Old List
    SDSSelectedItemModelHelper.clearItems(model.items);
    //Adds new List
    SDSSelectedItemModelHelper.addItems(
      selectedItems,
      keyField,
      selectionMode,
      model
    );
  }
}

export enum SelectionMode {
  SINGLE,
  MULTIPLE,
}
