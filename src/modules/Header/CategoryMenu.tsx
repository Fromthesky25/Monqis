import { useState, useEffect } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const mainCategories = ['Пальто', 'Плащи', 'Куртки', 'Пиджаки', 'Блузы', 'Свитера', 'Платья', 'Жилеты', 'Брюки', 'Юбки', 'Шорты'];
const accessories = ['Головные уборы', 'Шарфы', 'Очки', 'Украшения', 'Ремни и пояса', 'Сумки'];

function CategoryMenu({ category }: any) {
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        switch (category) {
            case 'Мужское':
            case 'Женское':
                setItems(mainCategories);
                break;
            case 'Аксессуары':
                setItems(accessories);
                break;
            default:
                setItems([]);
                break;
        }
    }, [category])

    return (
        <>
            {
                items.length > 0 &&
                <List className='asd'>
                    {items.map((item) => (
                        <ListItem disablePadding>
                            <ListItemButton dense={true}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            }
        </>
    );
}
export default CategoryMenu;