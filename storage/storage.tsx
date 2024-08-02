export const storage = {
    get(key: string){
        const val = window.localStorage.getItem(key)
        if(!val){
            return null
        }
        return JSON.parse(val)
    },
    set(key: string,val: any){
        window.localStorage.setItem(key,JSON.stringify(val))
    },
    remove(key: string){
        window.localStorage.removeItem(key)
    },
    clear(){
        window.localStorage.clear()
    }
}

export default storage