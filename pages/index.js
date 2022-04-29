import Head from 'next/head';


function Home() {
  
    return (
      
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follw'/>
        <meta name='description' content='site like e deslike...'/>
        <meta name='author' content='Alcione'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Like/Deslike(Upvote/DownVote)</title>
      </Head>
      <div>
      
      <h1>Like e Deslike</h1>

      
      
      <iframe width="360" height="235" src="https://www.youtube.com/embed/xypKS-_g2Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      <iframe width="360" height="235" src="https://www.youtube.com/embed/lqY_VkU1Fu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
       </div>
       <input type="checkbox"/>
       <label>curtir</label>

       <div class="seg"><input type="checkbox"/></div>
       <label>curtir</label>
      
    </div>
    )
  }
  
  export default Home;