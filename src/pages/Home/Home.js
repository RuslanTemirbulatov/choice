import React from 'react';
import './style.scss';

const Home = () => {
    return (
        <div>
            <main className='main container'>
                <div className='main__left'>
                    <div className="image-main"><img className='img-main' width={600} height={400} src="/img/main.png" alt="main" /></div>
                </div>
                <div className='main__right'>
                    <h1 className='main__right-uptitle'>Добро пожаловать в кафе</h1>
                        <p className='main__right-title'>
                            В парадной части столицы на Большой Дмитровке, которую Гиляровский называл самой шумной в городе, появилась новая гастро-точка – 
                            Choice bar с любопытным миксом европейской, русской и паназиатской кухонь, авторскими коктейлями, каминным залом, караоке, и 
                            собственной парковкой. Пространство выполнено в стиле loft, преобладают песочные и морские оттенки, кирпичная кладь стен. Мебель, 
                            выполненная из древесных фактур сочетается с текстилем в теплых тонах. Дизайнеры старались максимально сохранить историческое 
                            помещение 1901 года постройки, сделав его удобным, просторным и практичным. Поэтому среди камня, металла, кирпича и дерева сохранены 
                            фрагменты старинной жилой архитектуры.
                        </p>
                </div>
            </main>
        </div>
    );
};

export default Home;