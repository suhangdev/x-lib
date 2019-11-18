import { Component, Vue } from 'vue-property-decorator'
import sidebar from '../components/sidebar/sidebar'
import topbar from '../components/topbar/topbar'
import preview from '../components/preview/preview'

import './content.module.less'

@Component({
    components: {
        sidebar,
        topbar,
        preview
    }
})
export default class Content extends Vue {
    render() {
        return (
            <div class="content">
                <topbar></topbar>
                <div class="content-container">
                    <sidebar></sidebar>
                    <nuxt-child/>
                    <preview></preview>
                </div>
            </div>
        )
    }
}