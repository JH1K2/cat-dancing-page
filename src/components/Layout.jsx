import './Layout.css'

function Layout({ children }) {
  return (
    <main className="layout">
      <h1 className="title">🐱 댄싱 고양이</h1>
      <p className="subtitle">클릭해서 춤을 시작하세요!</p>
      {children}
    </main>
  )
}

export default Layout
