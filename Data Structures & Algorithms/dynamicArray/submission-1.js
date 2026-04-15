class DynamicArray {

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity <= 0) {
            throw new Error('Capacity must be greater than zero (0)');
        }
        this.capacity = capacity;
        this.size = 0;
        this.data = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.data[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size === this.capacity) this.resize();
        this.data[this.size] = n;
        this.size += 1;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size === 0) return undefined;
        const val = this.data[this.size - 1];
        this.size -= 1;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newArrayData = new Array(this.capacity);
        for ( let i = 0; i < this.size; i++ ) {
            newArrayData[i] = this.data[i];
        }
        this.data = newArrayData;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
