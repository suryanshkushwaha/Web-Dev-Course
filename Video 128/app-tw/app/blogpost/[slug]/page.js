export default function Page({ params }) {
    let languages = ["python", "javascript", "java"]
    if (languages.includes(params.slug)) {
        return <div>My Blog: {params.slug}</div>
    } else {
        return <div>Post not found</div>
    }
}