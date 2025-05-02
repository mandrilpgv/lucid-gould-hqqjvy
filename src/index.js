<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tinta Borracha Líquida Brasileira</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .whatsapp-float {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">

  <!-- Header com Logo -->
  <header class="bg-white shadow p-4 flex items-center justify-between px-8">
    <div class="text-2xl font-bold text-green-700">
      <img src="https://via.placeholder.com/150x50?text=Sua+Logo" alt="Logo Tinta Borracha" class="h-10 inline">
    </div>
    <nav class="hidden md:flex gap-6 text-sm text-gray-600">
      <a href="#beneficios" class="hover:text-green-700">Benefícios</a>
      <a href="#form" class="hover:text-green-700">Fale Conosco</a>
    </nav>
  </header>

  <!-- Hero -->
  <section class="bg-green-700 text-white p-10 text-center">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Tinta Borracha Líquida Brasileira</h1>
    <p class="text-lg md:text-2xl mb-6">Impermeabilize e proteja com uma solução ecológica, elástica e de alta performance.</p>
    <a href="#form" class="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Solicite uma Demonstração</a>
  </section>

  <!-- Benefícios -->
  <section id="beneficios" class="py-12 px-6 md:px-20 bg-white">
    <h2 class="text-3xl font-bold mb-8 text-center">Por que escolher nossa Tinta Borracha?</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-xl font-semibold mb-2">100% Impermeável</h3>
        <p>Vedação completa para áreas expostas à umidade e infiltrações.</p>
      </div>
      <div class="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-xl font-semibold mb-2">Alta Elasticidade</h3>
        <p>Expande e contrai sem rachaduras, acompanhando as movimentações da estrutura.</p>
      </div>
      <div class="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-xl font-semibold mb-2">Aplicação Simples</h3>
        <p>Pode ser aplicada com rolo, pincel ou airless, sem complicações.</p>
      </div>
    </div>
  </section>

  <!-- Vídeo -->
  <section class="py-12 px-6 md:px-20 bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-6">Veja o Produto em Ação</h2>
    <div class="max-w-3xl mx-auto">
      <iframe class="w-full aspect-video rounded-xl shadow" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>

  <!-- Formulário -->
  <section id="form" class="py-12 px-6 md:px-20 bg-white">
    <h2 class="text-3xl font-bold mb-6 text-center">Solicite um Contato</h2>
    <form class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-xl shadow space-y-4">
      <input type="text" placeholder="Nome completo" class="w-full p-3 rounded border border-gray-300" required />
      <input type="email" placeholder="E-mail" class="w-full p-3 rounded border border-gray-300" required />
      <input type="tel" placeholder="Telefone/WhatsApp" class="w-full p-3 rounded border border-gray-300" />
      <textarea placeholder="Mensagem ou dúvida" class="w-full p-3 rounded border border-gray-300" rows="4"></textarea>
      <button type="submit" class="w-full bg-green-700 text-white p-3 rounded font-semibold hover:bg-green-800 transition">Enviar</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="bg-green-700 text-white text-center py-6">
    <p>&copy; 2025 Tinta Borracha Brasil. Desenvolvido com ❤️ no Brasil.</p>
  </footer>

  <!-- Botão WhatsApp -->
  <a href="https://wa.me/SEUNUMERO" target="_blank" class="whatsapp-float">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="w-14 h-14">
  </a>

</body>
</html>