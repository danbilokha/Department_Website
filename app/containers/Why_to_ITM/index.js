import React from 'react';
import '../GlobalPageSetting.css';
import './index.css';
import kartinka from './img1.png';
import Img from '../../components/Img/index';

export default function Why(){
    return(
        <div>
            <div className='topimage'/>
            <div className='paragraph'>
                <div className ='page_content'>
                    <h1 id ='whymainstring'>Що з цього вийде</h1>
                    <div>
                    Після проходження навчання за обраною спеціалізацією з Вас вийде фахівець,
                    який без зусиль зможе знайти роботу в центрах обробки даних та з програмними сервісами міжнародних та
                    вітчизняних телекомунікаційних компаній, в структурах ІТ-оператора, компаніях мобільного оператора, 
                    в ІТ-компаніях, що застосовують програмно-визначальні базові мережі, надають послуги зв'язку та Internet, 
                    у фірмах-розробниках спеціального ПЗ, в технічних відділах банків та організацій різних форм власності, 
                    що використовують мережні технології​.
                    </div>
                </div>
            </div>
        </div>
    )
}