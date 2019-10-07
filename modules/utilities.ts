console.log("utilities linked up");

type key = string; 
type id = string; 
type value = any; 
type accessor = key | id; 

type data = {
    key: key; 
    id: id; 
    value: value; 
    getData(accessor: accessor): value; 
}

type searchObject = {
    key: key; 
    value: value; 
}

type means = "id" | "key" | "value"; 

interface Database {
    _secret: string; 
    allData: {};
    addModelName(modelName: string): boolean; 
    addData(secret: string, model: string, newData: data): boolean; 
    getData(secret: string, model: string, key: string, id: string | undefined): data;
    generateId(): string; 
}

interface Model {
    name: string; 
    find(query: searchObject | id): Array<FoundData> | []; 
    findOne(query: searchObject | id): FoundData | null; 
    findBy(means: means, target: any): Array<FoundData> | []; 
    all(): Array<FoundData> | []; 
    add(data: data): data | boolean; 
    remove(): boolean; 
    update(data: data): data | boolean; 
}

class Model implements Model {
    protected _secret: string; 
    constructor(name: string, _secret: string){
        this.name = name;
        this._secret = _secret; 
    }

}

class FoundData extends Model {
    data: data; 
    name: string; 
    _secret: string; 
    constructor(name: string, _secret: string, data: data){
        super(name, _secret);
        this.data = data; 
        this.name = name; 
        this._secret = _secret; 
    }
}

class Database implements Database {
    
}
