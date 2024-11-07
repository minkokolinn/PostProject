<template>
  
</template>

<script>
export default {
    setup(){
        let array = [
            "web",
            "vuejs",
            "vuejs",
            "larvel",
            "react"
        ]
        console.log(array);
        let uniqueArray = array.filter((element,index)=>{
            return index===array.indexOf(element)
        })
        console.log(uniqueArray);
    }
}
</script>

<style>

</style>