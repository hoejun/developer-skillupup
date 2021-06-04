const column = [
  {
    name: 'Name',
    fieldName: 'Name',
    type: 'data',
    width: '80',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: 'Name',
      showTooltip: true,
      tooltip: '<span style="color: red;">이름</span>',
    },
    renderer: {
      type: 'text',
      showTooltip: true,
    },
  },
  {
    name: 'FullName',
    fieldName: 'FullName',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: 'Full Name',
      showTooltip: false,
    },
  },
  {
    name: 'Company',
    fieldName: 'Company',
    type: 'data',
    width: '220',
    styles: {
      textAlignment: 'center',
    },
    header: 'Company Name',
  },
  {
    name: 'Age',
    fieldName: 'Age',
    type: 'data',
    width: '130',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: 'Age',
      showTooltip: false,
    },
    numberFormat: '0',
  },
  {
    name: 'Email',
    fieldName: 'Email',
    type: 'data',
    width: '300',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: 'Email',
      showTooltip: false,
    },
  },
];

export default column;
