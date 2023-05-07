const iconsMap: { [key: string]: string } = {
    'Квартира': '/img/icons/floor-plan.svg',
    'Паркинг': '/img/icons/car.svg'
}

export const getIcon = (text: string): string => iconsMap[text] || ''

export const colorsMap: { [key: string]: string } = {
    'Уступка от юр. лица': 'red',
    'Уступка от физ. лица': 'blue',
    "Забронировано": 'light-gray',
    "Продано": 'dark-gray'
}

export const keysToSearch = ['complex', 'block', 'apartment', 'parking']