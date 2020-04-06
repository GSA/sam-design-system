// ItemData is not empty

export let SearchMessageInfoSampleData =
  {
   'title': 'Welcome to GSA',
   'message': 'We found your data.'
}

// Item with Error
export let SearchMessageErrorSampleData =
  {
   'title': 'Invalid Data',
   'message':"Your data doesn't match",
   iconObject: {
    'iconlib': 'sds',
    'icon': 'bell',
    'iconsize': '5x'
  }
}

// Item is empty
export let SearchMessageNoMatchFound =
{
  'title': 'No matches found',
  'message': 'We could not find a match for your search criteria Please try another search or go back to previous results.',
  iconObject: {
    'iconlib': 'sds',
    'icon': 'book',
    'iconsize': '5x'
  }
}
