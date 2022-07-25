/**
 * Contains additional options needed to properly render some formly types. In some cases,
 * just label and value might not be enough, and will require additional information.
 * For example, autocomplete values tend to be complex objects, with some primaryTextField
 * that defines which property of the value is shown to the user. To properly display in
 * readonly format, it is also necessary to pass in that primaryTextField property. Hence,
 * if the formly type to display in readonly format is autocomplete, then we expect the
 * autocompleteOptions' primaryTextField property to be defined
 *
 * If the additional information is not passed in, then the value is still displayed to the user,
 * either as json string if the value is some object, or just as it is otherwise.
 */
export interface ReadonlyOptions {
  // List of options provided to users to choose from
  providedOptions?:
    | { key: string; value: string }
    | { label: string; value: string }[];

  // Autocomplete setting used to define primary text field
  autocompleteOptions?: {
    primaryTextField: string;
  };

  // Key value that maps to start / end dates of the date range model.
  // By default, these values are set to 'fromDate' and 'toDate'
  daterangepickerOptions?: {
    fromDateKey: string;
    toDateKey: string;
  };
}
