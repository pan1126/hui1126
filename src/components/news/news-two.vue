<template>
	<div id="tmpl">
	
	   <div class="title">
		   <h2 v-text="info.title"></h2>
		   <p>{{ info.add_time | datafor('YYYY-MM-DD') }}  {{info.click}}次浏览</p>
	   </div>
	   <div id="content" v-html="info.content" ></div>
	   
	   
	   <comment :id='id'></comment>
	</div>
	
	

</template>



<script>

	import comment from '../subcom/comment.vue'

	export default{
		components:{
			comment
		},
		data(){
			return {
				id:null,
				info:{}
			}
		},
		created(){
			this.id=this.$route.params.id
			
			this.getinfo()
			
		},
		methods:{
			getinfo(){
				var url='http://www.lovegf.cn:8899/api/getnew/'+this.id
				
				this.$http.get(url).then(function(response){
					if(response.body.status!=0){
						return
					}
					
					this.info=response.body.message[0]
					
					

				
				})
				
			}	
		
		}
	
	
	}


</script>



<style scoped>
	.title h2{
		color: #0094ff;
	}
	.title p{
		color:rgba(0,0,0,0.5);
	}

	.title,#content{
		padding: 5px;
	}


</style>
