import React from 'react'

export default class Conference extends React.Component{
    constructor(props) {
        super(props);
        //У приложения есть всего три свойства, которые необходимо использовать в состоянии:
        // данные, полученные с сервера, номер активного пользователя и поисковый запрос,
        // введённый в строку поиска. Изначальные настройки для состояния будут выглядеть следующим образом:
        // данных нет, поискового запроса тоже, активный пользователь под номером 0.
        
        this.state = {
            data: null,
            active: 0,
            term: ''
          };
      }

      loadData() {
        // Загружаем данные из файла, переданного в качестве параметра
        load(this.props.data).then(users => {
          // После загрузки обновляем состояние
          this.setState({
            data: JSON.parse(users)
          });
        });
      }
      
    render() {
        return (<a></a>);
      }
} 
