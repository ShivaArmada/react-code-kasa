import './../styles/NotFound.scss';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function NotFound() {
  return (
    <>
      <div className="Body">
        <Header />
        <section className='NotFound__block'>
<h1 className='NotFound__block--404'>404</h1>
<h2 className='NotFound__block--desc'>Oups! La page que vous demandez n'existe pas.</h2>
<a className='NotFound__block--link' href="/">Retourner sur la page d'accueil</a>
</section>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
