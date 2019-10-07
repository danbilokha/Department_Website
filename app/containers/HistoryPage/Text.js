import React from 'react';
import './Text.css';
import image from './images/image.png';
import image2 from './images/image 2.png';
import image3 from './images/image 5.png';
import image4 from './images/image 6.png';
import image5 from './images/image 7.png';
import image6 from './images/image 8.png';
import image7 from './images/image 9.png';
import image8 from './images/image 10.png';
import image9 from './images/image 11.png';
import image10 from './images/image 12.png';
import Img from '../../components/Img/index';
import Img_text from '../../components/Img_Text';
import Img_text_2 from '../../components/Img_Text_2';

import TextTeacher from '../../components/TextTeacher/index';

export default function Text(){
    return(
        <div className = 'text'>
            <h1>
                Про Кафедру
            </h1>
            <h2>
                Історія кафедри ІТМ
            </h2>
            <div>   
                <div className = 'imageone'>
                    <Img src = {image} className = 'image1'/>
                </div>
                В НТУУ “КПІ” напрям підготовки “Телекомунікації” був затверджений після створення в 2002р.
                кафедри Телекомунікаційних систем та мереж (ТСМ), яку очолила професор, д.т.н. Глоба Л.С., яка на той
                час вже була відомим науково-педагогічним фахівцем в галузі інформаційно-телекомунікаційних технологій.
                На потребу необхідності навчання студентів в напрямку "Телекомунікації" інформаційним технологіям в 2004 році
                на базі кафедри ТСМ була створена кафедра Інформаційно-телекомунікаційних мереж (ІТМ) в Інституті телекомунікаційних систем НТУУ "КПІ".
                Результати роботи кафедри зі спеціальності “Інформаційні мережі зв’язку” дали підставу для отримання ліцензії та сертифікату про акредитацію 
                (Серія НД-ІV №112361 від 30.06.2005р.) Міністерства освіти та науки України на право навчання та видачу дипломів студентам-випускникам з цієї спеціальності, 
                що засвідчило про високий рівень організації навчання студентів та їх рівень знань. За ці роки вона підготувала сотні молодих інженерів широкого профілю, які на 
                сьогодні працюють в провідних компаніях та організаціях інформаційно-телекомунікаційного профілю інженерами електрозв'язку, інженерами з експлуатації обладнання електрозв'язку, 
                інженерами з керування й обслуговування систем, інженерами-дослідниками, інженерами з організації виробничих процесів електрозв'язку, системними адміністраторами мереж електрозв'язку і тощо. 
            </div>
            <div className = 'images'>
                <Img src = {image2} className = 'image1'/>
                <Img src = {image3} className = 'image1'/></div>
            <p className = 'textunderphoto'>
                Студенти кафедри в 2007-2008 навчальному
                році вибороли звання найкращої групи ІТС
            </p>
            <h3>
                Студенти кафедри ставали студентами року ІТС:
            </h3>  
            <div className = 'images'>
                <Img_text image={image4} text = "boilerplate.containers.ImgText.paragraph1"/>
                <Img_text image={image5} text = "boilerplate.containers.ImgText.paragraph2"/>
                <Img_text image={image6} text = "boilerplate.containers.ImgText.paragraph3"/>
                <Img_text image={image7} text = "boilerplate.containers.ImgText.paragraph4"/>
            </div>
            <h3>
                Студенти кафедри у 2012 році були удостоєні ректорської стипендії:
            </h3>
            <div className = 'images2'> 
                <div className='image8'>
                    <Img_text_2 image={image8} text = "boilerplate.containers.ImgText.paragraph5" />
                </div>
                <div>
                    <Img_text_2 image={image9} text = "boilerplate.containers.ImgText.paragraph6"/>
                </div>
            </div>
            <h3 className = 'title3'>
            Наші викладачі неодноразово отримували звання <br/> викладача-дослідника та молодого викладача – дослідника:
            </h3>
           <div className = 'lastblock'>
                <img src = {image10} className="diplom"/>
                <div>
                    <TextTeacher/> 
                </div>
            </div>
        </div>
    );
}