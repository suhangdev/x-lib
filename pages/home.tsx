import { Component, Vue } from 'vue-property-decorator'
import sidebar from '../components/sidebar/sidebar'
import topbar from '../components/topbar/topbar'
import preview from '../components/preview/preview'

import './home.module.less'

@Component({
    components: {
        sidebar,
        topbar,
        preview
    },
    async asyncData(context: any) {
        // context.$axios.get('/api').then((res: any) => {
        //     console.log(res)
        // })
        // if (process.server) {
        //     console.log('hi')
        // }
        return {
        }
    }   
})
export default class Home extends Vue {
    render() {
        return (
            <div class="home">
                <topbar></topbar>
                <div class="home-container">
                    <sidebar></sidebar>
                    <nuxt-child/>
                    <preview></preview>
                </div>
            </div>
        )
    }
}