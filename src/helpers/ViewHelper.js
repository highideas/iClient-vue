export default  {

    getDate(date) {
        let dateObj = new Date(date);
        return dateObj.toLocaleDateString()
    }
}
