import { defineStore } from "pinia";
import { Names } from "./sotre_name";

export const useInfoStore = defineStore(Names.TEST,{
	state: ()=> {
		return {
			name:'小黑',
			age:12
		}
	},
	getters:{
		newName():string{
			return `这是getter修饰过的名称 ${this.name}`
		}
	},
	actions:{
		plusAge(){
			this.age++
		}
	}
})