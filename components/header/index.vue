<template>
    <div class="header d-flex align-center">
        <v-container>
            <div class="d-flex justify-space-between align-center header__top">
                <a class="header__logo">
                <img src="~/assets/images/logo.png" alt="" style="max-width:163px"/>
                </a>
                <div class="header__menu">
                        <ul class="d-flex my-0 px-0">
                            <li class="ml-40 text-nav">
                               <NuxtLink :to="{ name: 'index'}">Trang chủ</NuxtLink>
                            </li>
                           
                            <li class="ml-40 text-nav">
                               <NuxtLink :to="{ name: 'gioi-thieu'}">Giới thiệu</NuxtLink>
                            </li>
                            
                            <li class="ml-40 text-nav">
                               <NuxtLink :to="{ name: 'dich-vu'}">Dịch vụ</NuxtLink>
                            </li>
                            
                            <li class="ml-40 text-nav">
                               <NuxtLink :to="{ name: 'tin-tuc'}">Tin tức</NuxtLink>
                            </li>
                            
                            <li class="ml-40 text-nav">
                               <NuxtLink :to="{ name: 'doi-tac'}">Đối tác</NuxtLink>
                            </li>
                            
                            <li class="ml-40 text-nav">
                               <NuxtLink :to="{ name: 'lien-he'}">Liên hệ</NuxtLink>
                            </li>
                        </ul>
                </div>
                <a href="tel:0909 090 909" class="btn btn-primary custom-responsive">
                     <div v-html="icPhone"></div>
                    0909 090 909
                </a>
            </div>
        </v-container>
    </div>
</template>
<script>

export default {
    name:'Header',
    components:{
      
    },
    computed: {
        icPhone() {
            const icPhone = require(`assets/images/ic-phone.svg?raw`)
            return icPhone
        }
    }
}
</script>