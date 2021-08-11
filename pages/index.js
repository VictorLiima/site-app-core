import Head from "next/head";
import stylesheet from "styles/main.scss";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading",
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article, message = false) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
      message,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: "",
      });
    }, 350);
  }
  render() {
    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? "is-article-visible" : ""
        }`}
      >
        <div>
          <Head>
            <title>Victor Lima</title>
            <meta charset="utf-8" />
            <meta name="language" content="pt-br"></meta>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta http-equiv="X-UA-Compatible" content="IE=7" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />

            <title>Victor Lima - Desenvolvedor Web</title>
            <meta
              name="description"
              content="Desenvolvedor freelancer de sites, apps, e-commerce e web services."
            />
            <meta name="robots" content="" />
            <meta name="author" content="Victor Lima" />
            <meta
              name="keywords"
              content="Desenvolvimento Web, sites, site, venda, seu site, html, e-commerce, loja virtual, estoque, João Victor, Victor Lima"
            />

            <meta property="og:type" content="page" />
            <meta property="og:url" content="https://victorliima.com.br/" />
            <meta property="og:title" content="Victor Lima" />
            <meta property="og:image" content="%PUBLIC_URL%/social.jpg" />
            <meta
              property="og:description"
              content="Transformando sua idéia com tecnologia!"
            />

            <meta property="article:author" content="Victor Lima" />

            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
              rel="stylesheet"
            />
            <link
              rel="icon"
              href="../static/images/favicon.ico"
              type="image/x-icon"
            />
          </Head>

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
              article={this.state.article}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              onOpenArticle={this.handleOpenArticle}
              article={this.state.article}
              message={this.state.message}
            />
            <Footer timeout={this.state.timeout} />
          </div>

          <div id="bg" />
        </div>
      </div>
    );
  }
}

export default IndexPage;
