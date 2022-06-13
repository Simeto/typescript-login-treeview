export interface CheckboxNode {
  name: string,
  label: string,
  checked: boolean,
  requirred: boolean,
  sub?: CheckboxNode[]
}

export const root: CheckboxNode = {
  name: 'aaaa',
  label: 'b',
  checked: false,
  requirred: false,
  sub: [{
    name: 'b',
    label: 'b',
    checked: false,
    requirred: false,
    sub: [
      {
        name: '11',
        label: '11',
        checked: false,
        requirred: false,
      },
      {
        name: '11',
        label: '11',
        checked: false,
        requirred: false,
      },
      {
        name: '11',
        label: '11',
        checked: false,
        requirred: false,
      },
      {
        name: '4',
        label: '11',
        checked: false,
        requirred: false,
        sub: [
          {
            name: '11',
            label: '11',
            checked: false,
            requirred: false,
          },
          {
            name: '11',
            label: '11',
            checked: false,
            requirred: false,
          },
          {
            name: '24',
            label: '11',
            checked: false,
            requirred: false,
            sub: [
              {
                name: '11',
                label: '11',
                checked: false,
                requirred: false,
              },
              {
                name: '11',
                label: '11',
                checked: false,
                requirred: false,
              },
              {
                name: '11',
                label: '11',
                checked: false,
                requirred: false,
              }
            ]
          },
        ]
      },
    ]
  }],
}