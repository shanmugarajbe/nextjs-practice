import Layout from "../comps/MyLayout"

const Content = (props) => (
  <div>
  <h1> {props.url.query.title} </h1>
  <p> This is a blog detail page post </p>
  </div>
)

export default (props) => (
  <Layout>
    <Content    url={props.url}/>
  </Layout>
)
