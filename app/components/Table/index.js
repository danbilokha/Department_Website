import React from 'react';
import TableBody from '../../components/Table/TableBody';
import TableCell from '../../components/Table/TableCell';
import TableColumns from '../../components/Table/TableColumns';
import './index.css'

function Table(props) {
    return (       
    <table className = "table">
        <TableBody>
            <TableCell className = "first_row">
                <TableColumns className = "first_column">Ступінь вищої освіти</TableColumns>
                <TableColumns>Кваліфікація</TableColumns>
                <TableColumns>Галузь знань</TableColumns>
                <TableColumns>Код і назва спеціальності</TableColumns>
                <TableColumns>Назва освітньої програми</TableColumns>
                <TableColumns>Форма навчання</TableColumns>
            </TableCell>
            <TableCell>
                <TableColumns className = "first_column">Бакалавр</TableColumns>
                <TableColumns>бакалавр з інженерії програмного забезпечення</TableColumns>
                <TableColumns>12 Інформаційні технології</TableColumns>
                <TableColumns>121 Інженерія програмного забезпечення</TableColumns>
                <TableColumns>Інженерія програмного забезпечення комп‘ютеризованих систем</TableColumns>
                <TableColumns>денна </TableColumns>
            </TableCell>
            <TableCell>
                <TableColumns className = "first_column">Бакалавр</TableColumns>
                <TableColumns>бакалавр з інформаційних систем та технологій</TableColumns>
                <TableColumns>12 Інформаційні технології</TableColumns>
                <TableColumns>126 Інформаційні системи та технології</TableColumns>
                <TableColumns>Інформаційне забезпечення робототехнічних систем</TableColumns>
                <TableColumns>денна заочна</TableColumns>
            </TableCell>
            <TableCell>
                <TableColumns className = "first_column">Магістр</TableColumns>
                <TableColumns>магістр з інженерії програмного забезпечення</TableColumns>
                <TableColumns>12 Інформаційні технології</TableColumns>
                <TableColumns>121 Інженерія програмного забезпечення</TableColumns>
                <TableColumns>Інженерія програмного забезпечення комп‘ютеризованих систем</TableColumns>
                <TableColumns>денна заочна</TableColumns>
            </TableCell>
            <TableCell>
                <TableColumns className = "first_column">Магістр</TableColumns>
                <TableColumns>магістр з інформаційних систем та технологій</TableColumns>
                <TableColumns>12 Інформаційні технології</TableColumns>
                <TableColumns>126 Інформаційні системи та технології</TableColumns>
                <TableColumns>Інформаційне забезпечення робототехнічних систем</TableColumns>
                <TableColumns>денна заочна</TableColumns>
            </TableCell>
            <TableCell>
                <TableColumns className = "first_column">Доктор філософії</TableColumns>
                <TableColumns>доктор філософії</TableColumns>
                <TableColumns>12 Інформаційні технології</TableColumns>
                <TableColumns>121 Інженерія програмного забезпечення</TableColumns>
                <TableColumns>Інженерія програмного забезпечення комп‘ютеризованих систем</TableColumns>
                <TableColumns>денна</TableColumns>
            </TableCell>
        </TableBody>
    </table>
    );
  }
  
export default Table;