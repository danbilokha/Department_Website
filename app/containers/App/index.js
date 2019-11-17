import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import KafedraPage from 'containers/KafedraPage/Loadable';
import HistoryPage from 'containers/HistoryPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import DonatorsPage from 'containers/DonatorsPage/Loadable';
import TeachersPage from 'containers/TeachersPage/Loadable';
import TestPage from 'containers/TestPage/Loadable';
import EnterPage from 'containers/EnterPage/Loadable';
import ConferencesPage from 'containers/ConferencesPage/Loadable';
import ContactsPage from '../ContactsPage';

import StudyPage from 'containers/StudyPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';
import './index.css';
import GlobalStyle from '../../global-styles';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper className="AppWrapper">
      <Helmet titleTemplate="%s-Kafedra" defaultTitle="React.js Boilerplate" />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/kafedra_ITM" component={KafedraPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/donators" component={DonatorsPage} />
        <Route path="/study" component={StudyPage} />
        <Route path="/enter" component={EnterPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/teachers" component={TeachersPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/conferences" component={ConferencesPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
