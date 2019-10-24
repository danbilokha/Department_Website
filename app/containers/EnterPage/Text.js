import React from 'react';
import './Text.css';

import Img from '../../components/Img/index';

import ForEntrant from '../../components/ForEntrant/index'
import { FormattedMessage } from 'react-intl';
import Table from '../../components/Table/index';
import TableBody from '../../components/Table/TableBody';
import TableCell from '../../components/Table/TableCell';
import TableColumns from '../../components/Table/TableColumns';


export default function Text(){
    return(
        <div className = 'text'>
            <div className = "Information_for_Students">
                <h1>Вступ</h1>
                    <ForEntrant/>
            </div>
            <h1>Спеціалізація «ІНФОРМАЦІЙНО-КОМУНІКАЦІЙНІ ТЕХНОЛОГІЇ»</h1>
            <p>
                <b>Спеціалізація <i>«Інформаційно-комунікаційні технології» </i></b>
                 забезпечує фундаментальну теоретичну та прикладну практичну підготовку за загальною програмою 
                 <b> галузі ​знань <i>«Електроніка та телекомунікації»</i></b>,  
                 <b> спеціальності <i>«Телекомунікації та радіотехніка» </i></b>
                  на трьох рівнях вищої освіти: бакалавр, магістр, доктор філософії.
            </p>
            <Table>
                <TableBody>
                    <TableCell>
                        <TableColumns>
                            
                        </TableColumns>
                        <TableColumns>
                            
                        </TableColumns>
                        <TableColumns>
                            
                        </TableColumns>
                        <TableColumns>
                            
                        </TableColumns>
                        <TableColumns>
                            
                        </TableColumns>
                        <TableColumns>
                            
                        </TableColumns>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    );
}