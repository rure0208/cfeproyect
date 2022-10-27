import Head from 'next/head'

const Layout = ({ children, tituloPestaña }) => {

    return (
 <div>
        <Head>
            <title>
                CFE-{tituloPestaña}
            </title>
            
        </Head>
        { children }
</div>
    )
}

export default Layout
