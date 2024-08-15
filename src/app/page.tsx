import React from "react";
import Container from "@/components/container/Container";
import Todo from "@/components/todo/Todo";

const Home = () => {
  return (
    <main>
      <section className="bg-[#8758ff]">
        <Container>
          <div className="w-full h-screen flex justify-center items-center">
            <Todo />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
