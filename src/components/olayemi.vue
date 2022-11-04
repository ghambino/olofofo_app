<!-- <template>
    <section class="topbar">
        
        <div class="left-section">
    
            <div class="topdiv">
                
                <div class="cards">
                    <p>Latest Stories</p>
                    <p>Think</p>
                    <p>Health</p>
                </div>

                <div class="vectorimage ms-auto">
                    <img v-bind:src="manupvector2" alt='manupvector'/>
                    <img v-bind:src="manupvector" alt='manupvector'/>
                </div>
            </div>
        

        <div class="image-card">
            <div class="card-details">
                   a<img class="man-img" src="../images/man.png" alt="man">
                   <p class="text1">John Lewis to make final journey across Edmund Pettus Bridge in procession</p>
                   <p class="text2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                <div class="hero-down">
                    <p class="hours">2 hours ago</p>
                    <p class="lucy">By Lucy Hiddleston  |  4min read</p>
                </div>

                    <hr>
                <div>
                    <div class="news-bottom">
                        <div class="love">
                           <img src="../images/lovevector.png" alt='lovevector'/>
                           <p>24</p>
                        </div>

                         <div class="arrowup">
                            <img src="../images/arrowup.png" alt='arrowup'/>
                            <p>72</p>
                        </div>

                    <div class="arrowdown">
                       <img src="../images/arrowdown.png" alt='vector3'/>
                    </div>
                </div>
              </div>
            </div>
                

        
            <div class="card-details">
                <img class="man-img" src="../images/man.png" alt="man">
                <p class="text1">John Lewis to make final journey across Edmund Pettus Bridge in procession</p>
                <p class="text2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                <div class="hero-down">
                  <p class="hours">2 hours ago</p>
                  <p class="lucy">By Lucy Hiddleston  |  4min read</p>
                </div>

                <hr>
                <div class="news-bottom">
                    <div class="love">
                       <img class="vector" src="" alt='lovevector'/>
                       <p>24</p>
                    </div>

                    <div class="arrowup">
                       <img class="vector" src="" alt='arrowup'/>
                       <p>72</p>
                    </div>

                    <div class="arrowdown">
                      <img class="vector" src="" alt='arrowdown'/>
                    </div>
                </div>
            </div>

            <div class="card-details">
                <img class="man-img" src="../images/man.png" alt="man">
                <p class="text1">John Lewis to make final journey across Edmund Pettus Bridge in procession</p>
                <p class="text2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                <div class="hero-down">
                  <p class="hours">2 hours ago</p>
                  <p class="lucy">By Lucy Hiddleston  |  4min read</p>
                </div>

                <hr>
                <div class="news-bottom">
                    <div class="love">
                       <img class="vector" src="" alt='lovevector'/>
                       <p>24</p>
                    </div>

                    <div class="arrowup">
                       <img class="vector" src="" alt='arrowup'/>
                       <p>72</p>
                    </div>

                    <div class="arrowdown">
                      <img class="vector" src="" alt='arrowdown'/>
                    </div>
                </div>
            </div>
            
          

            <div class="card-details">
                <img class="man-img" src="../images/man.png" alt="man">
                <p class="text1">John Lewis to make final journey across Edmund Pettus Bridge in procession</p>
                <p class="text2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                <div class="hero-down">
                  <p class="hours">2 hours ago</p>
                  <p class="lucy">By Lucy Hiddleston  |  4min read</p>
                </div>

                <hr>
                <div class="news-bottom">
                    <div class="love">
                       <img class="vector" src="" alt='lovevector'/>
                       <p>24</p>
                    </div>

                    <div class="arrowup">
                       <img class="vector" src="" alt='arrowup'/>
                       <p>72</p>
                    </div>

                    <div class="arrowdown">
                      <img class="vector" src="" alt='arrowdown'/>
                    </div>
                </div>
            </div>
        </div>

        <div class="button-div">
            <button>View more</button>
        </div>
    </div>


        <div class="right-section">
            <h1>bvnbm,n</h1>
        </div>
    </section>
    
</template>

<script>
export default {
    name: 'FigmaprojectCards',

    data() {
        return {
            manupvector2: require ('../images/manupvector2.png'), 
            manupvector: require ('../images/manupvector.png'),
            Checkbox:  require ('../images/Checkbox.png'),
            man: require ('../images/man.png'),
            lovevector: require ('../images/lovevector.png'),
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.topdiv{
    width: 400px;
    display: flex;
    justify-content: space-between;
}
.cards{
    display: flex;
    align-items: center;
    gap: 60px;
    background-color: #FFF;
    align-items: center;
    padding: 1rem;
    width: 90%;
    margin-left: 1rem;  
    left: 292px;
    border-radius: nullpx;
}
.vectorimage{
    display: flex;
}
/* .image-card {
padding: 2rem 3rem;
width: 400px;
} */

.man-img{
    width: 80%;
}

.text1 {
    font-family: IBM Plex Serif;
font-size: 18px;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;

}
.text2 {
    font-family: Nunito Sans;
font-size: 15px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
}

.hero-down{
    display: flex;
    align-items: center;
    gap: 60px;
 
}
.hours{
    width: 94px;
height: 20px;
left: 302px;
top: 1267px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 165%;
color: #2A2A2A;
}
.lucy{
    width: 210px;
height: 20px;
left: 405px;
top: 1267px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 165%;
color: #2A2A2A;
opacity: 0.7;
}

.topbar{
    display: flex;
    gap: 80px,

}

.left-section{
    flex: 2.5;
}
.right-section{
    flex: 1;
}



.icons{
   display: flex;

} -->
