"use client"

import { useEffect, useState } from "react";

interface Post {
    id: number,
    title: string
}

export default function Home() {

    const [posts, setPosts] = useState<Post[]>([]); // 초기값은 비어있는 배열

    // 최초 렌더링 시 한 번만 실행
    useEffect(() => {
        fetch("http://localhost:8080/api/v1/posts") // API 서버에서 데이터를 가져옴
            .then(response => response.json()) // 응답을 json으로 변환
            .then(data => {
                console.log(data); // 데이터를 콘솔에 출력
                setPosts(data); // 데이터를 상태에 저장
            });
    }, []);
    
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id} className="p-2">
                    {post.id}. {post.title}                 
                </li>
            ))}
        </ul>
    )
}
