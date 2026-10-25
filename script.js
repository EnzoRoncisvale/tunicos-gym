/**
 * TUNICO'S GYM - INTERACTIVE ENGINE & DATA
 * High-performance vanilla JavaScript for unit search, lead capture, modals and interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DATASET DE UNIDADES (TUNICO'S GYM)
       ========================================================================== */
    const unitsData = [
        {
            id: 'asa-sul',
            name: "Tunico's Gym - Asa Sul",
            state: 'df',
            region: 'Distrito Federal',
            address: 'EQS 412/413 Bloco A, Asa Sul - Brasília, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 15h',
            image: 'https://framerusercontent.com/images/MrAhCp9xziah6Qfv8T3evmMXQbk.jpg?width=2048&height=1365',
            amenities: ['Musculação Pesada', 'Spinning Imersivo', 'Lutas', 'Ar-Condicionado', 'Vestiário VIP']
        },
        {
            id: 'asa-norte',
            name: "Tunico's Gym - Asa Norte",
            state: 'df',
            region: 'Distrito Federal',
            address: 'CLN 310 Bloco C, Asa Norte - Brasília, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 15h',
            image: 'https://framerusercontent.com/images/BPYXzbhrVMiwJPvxvBkG9dHQ.jpg?width=2048&height=1365',
            amenities: ['Musculação Completa', 'Dança & Ritmos', 'Ar-Condicionado', 'Espaço Recovery']
        },
        {
            id: 'aguas-claras-1',
            name: "Tunico's Gym - Águas Claras I",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Av. das Araucárias, 1325 - Águas Claras, Brasília, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 05h30 às 23h | Sáb: 08h às 18h | Dom: 09h às 15h',
            image: 'https://framerusercontent.com/images/ixoCDwOkVmv9bxM5OmCBQYlBKc.jpg?width=2048&height=1365',
            amenities: ['Musculação Biomecânica', 'Spinning', 'Muay Thai', 'Estacionamento Coberto']
        },
        {
            id: 'aguas-claras-2',
            name: "Tunico's Gym - Águas Claras II",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Av. das Castanheiras, 1060 - Águas Claras, Brasília, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 15h',
            image: 'https://framerusercontent.com/images/4AlSTBFye8VTJJlM4TYP8z3ff8.webp?width=1034&height=690',
            amenities: ['Salão Cardio Amplo', 'Treino Funcional', 'Alongamento', 'Wi-Fi 5G']
        },
        {
            id: 'sudoeste',
            name: "Tunico's Gym - Sudoeste",
            state: 'df',
            region: 'Distrito Federal',
            address: 'CLSW 304 Bloco B, Sudoeste - Brasília, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 15h',
            image: 'https://framerusercontent.com/images/x7MY9eoMctWQJbqR8JhmEkZznjI.webp?width=1400&height=933',
            amenities: ['Linha Musculação Premium', 'Spinning VIP', 'Lounge Café', 'Ar-Condicionado']
        },
        {
            id: 'noroeste',
            name: "Tunico's Gym - Noroeste",
            state: 'df',
            region: 'Distrito Federal',
            address: 'CRNW 510 Bloco B, Noroeste - Brasília, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 15h',
            image: 'https://framerusercontent.com/images/Mb0P1ju0bH4ZRV4fcxf8Tz20.jpg?width=2048&height=1365',
            amenities: ['Estrutura High-End', 'Área Funcional', 'Jiu-Jitsu', 'Estacionamento']
        },
        {
            id: 'taguatinga-centro',
            name: "Tunico's Gym - Taguatinga Centro",
            state: 'df',
            region: 'Distrito Federal',
            address: 'C 12 Bloco D, Loja 02 - Taguatinga Centro, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/wHeQAhPLD4aj5HJmRxpKRiilw.webp?width=3488&height=2325',
            amenities: ['Mega Salão de Musculação', 'Spinning', 'FitDance', 'Armários Inteligentes']
        },
        {
            id: 'taguatinga-2',
            name: "Tunico's Gym - Taguatinga II",
            state: 'df',
            region: 'Distrito Federal',
            address: 'QND 14 Lote 1, Comercial Norte - Taguatinga, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/vJm4uK3XhsBTQ0ppoEfpEpZlUo.webp?width=1048&height=699',
            amenities: ['Musculação Pesada', 'Boxe & Muay Thai', 'Ar Central', 'Estacionamento']
        },
        {
            id: 'brasil-21',
            name: "Tunico's Gym - Brasil 21 (Plano Piloto)",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Complexo Brasil 21, SHS Qd. 06 - Asa Sul, Brasília, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 05h30 às 23h | Sáb e Dom: 08h às 18h',
            image: 'https://framerusercontent.com/images/CMItagcLlElUaqmPxuV5iN2DKI.jpg?width=2048&height=1365',
            amenities: ['Academia Executiva VIP', 'Recovery Lounge', 'Personal Integrado', 'Ducha']
        },
        {
            id: 'sobradinho',
            name: "Tunico's Gym - Sobradinho",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Quadra 08 Bloco 01, Setor Comercial - Sobradinho, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h30 | Sáb: 08h às 17h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/daB2MXVrmt0YUj8nUK83Cbcrd4.webp?width=1402&height=934',
            amenities: ['Salão Amplo', 'Spinning', 'Aulas Coletivas', 'Ar-Condicionado']
        },
        {
            id: 'samambaia',
            name: "Tunico's Gym - Samambaia",
            state: 'df',
            region: 'Distrito Federal',
            address: 'QN 206 Conjunto 2 Lote 1 - Samambaia Norte, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/s9kvR3XtxsfgKZrZyurBKFuFYU.webp?width=3394&height=2263',
            amenities: ['Musculação Livre', 'Dança', 'Ar-Condicionado', 'Vestiário Completo']
        },
        {
            id: 'ceilandia',
            name: "Tunico's Gym - Ceilândia",
            state: 'df',
            region: 'Distrito Federal',
            address: 'QNN 18 Conjunto B Lote 35 - Ceilândia Sul, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/ZMHUAMAFhDVs0OadYi41LX3GU.webp?width=1051&height=701',
            amenities: ['Aparelhos Novos', 'Artes Marciais', 'Spinning', 'Vestiários Amplos']
        },
        {
            id: 'gama',
            name: "Tunico's Gym - Gama",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Setor Central, Quadra 1 Lote 15 - Gama, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h30 | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/LcwWNCYyr5S1Y9zrD9QNFnIBc.webp?width=3492&height=2328',
            amenities: ['Musculação Completa', 'Alongamento', 'Ar-Condicionado', 'Estacionamento']
        },
        {
            id: 'vicente-pires',
            name: "Tunico's Gym - Vicente Pires",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Rua 04A Lote 12, Chácara 120 - Vicente Pires, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/ZPmfpARRwmzfj65f2N7uoY78QD0.webp?width=1399&height=933',
            amenities: ['Ambiente Moderno', 'Spinning', 'FitDance', 'Estacionamento Privativo']
        },
        {
            id: 'recanto-das-emas',
            name: "Tunico's Gym - Recanto das Emas",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Av. Recanto das Emas, Quadra 203 - DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h | Sáb: 08h às 17h | Dom: 09h às 13h',
            image: 'https://framerusercontent.com/images/hazcOjVGFGNuh8ahcvTIAVuWfl0.webp?width=1398&height=932',
            amenities: ['Cardio e Musculação', 'Aulas de Ritmos', 'Ar-Condicionado']
        },
        {
            id: 'santa-maria-shopping',
            name: "Tunico's Gym - Santa Maria Shopping",
            state: 'df',
            region: 'Distrito Federal',
            address: 'CL 214 Lote A, 2º Piso - Santa Maria, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h30 | Sáb: 09h às 18h | Dom: 10h às 15h',
            image: 'https://framerusercontent.com/images/UbBR3Xgudsi3zYpLKZ0sJu7QvY.webp?width=1402&height=934',
            amenities: ['Segurança de Shopping', 'Estacionamento Fácil', 'Ar-Condicionado', 'Spinning']
        },
        {
            id: 'santa-maria-sul',
            name: "Tunico's Gym - Santa Maria Sul",
            state: 'df',
            region: 'Distrito Federal',
            address: 'QR 318 Conjunto F Lote 02 - Santa Maria Sul, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/TB55wSLKXuRQMqzb7vMsqqMdx0.webp?width=1051&height=701',
            amenities: ['Musculação', 'Área Cardio', 'Vestiários', 'Aulas Coletivas']
        },
        {
            id: 'ponte-alta',
            name: "Tunico's Gym - Ponte Alta (Gama)",
            state: 'df',
            region: 'Distrito Federal',
            address: 'DF-475 Km 02, Setor Habitacional Ponte Alta - Gama, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/9KTu2t6roLDmsrZfYh9vjVBFcQ.jpg?width=2048&height=1365',
            amenities: ['Amplo Espaço Aberto', 'Cross & Funcional', 'Estacionamento Próprio']
        },
        {
            id: 'arniqueira',
            name: "Tunico's Gym - Arniqueira",
            state: 'df',
            region: 'Distrito Federal',
            address: 'SHA Conjunto 04 Lote 14 - Setor Habitacional Arniqueira, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h',
            image: 'https://framerusercontent.com/images/250t2ACamAOGcJChpu9EPCjoA.jpg?width=2048&height=1365',
            amenities: ['Musculação Completa', 'Spinning', 'Ar-Condicionado']
        },
        {
            id: 'nucleo-bandeirante',
            name: "Tunico's Gym - Núcleo Bandeirante",
            state: 'df',
            region: 'Distrito Federal',
            address: '3ª Avenida Bloco 620 Loja 01 - Núcleo Bandeirante, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h30 | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/yUtremwy6MVeXHswuMwQMIHGzkg.webp?width=1046&height=697',
            amenities: ['Tradição & Peso Livre', 'Alongamento', 'Vestiários Novos']
        },
        {
            id: 'jardim-botanico',
            name: "Tunico's Gym - Jardim Botânico",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Av. Dom Bosco, Condomínio San Diego - Jardim Botânico, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/nCK3OfBLoJ40FIx0lGIPq1qMdA.webp?width=1396&height=930',
            amenities: ['Estrutura Moderna', 'Spinning Digital', 'Ar-Condicionado', 'Vagas']
        },
        {
            id: 'planaltina',
            name: "Tunico's Gym - Planaltina",
            state: 'df',
            region: 'Distrito Federal',
            address: 'Quadra 02 Lote 10, Setor Tradicional - Planaltina, DF',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h30 | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/ugc7wnmaB7Mxf55q1C38ZdTz7M.webp?width=1049&height=699',
            amenities: ['Musculação Pesada', 'Aulas de Luta', 'FitDance', 'Ar-Condicionado']
        },
        // GOIÁS & ENTORNO
        {
            id: 'valparaiso',
            name: "Tunico's Gym - Valparaíso de Goiás",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Quadra 05 Lote 02, Etapa A - Valparaíso I, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h30 | Sáb: 08h às 17h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/WftCw3Ua5zX9VzKan4Pvz9gpT7k.webp?width=1387&height=925',
            amenities: ['Mega Academia', 'Spinning Climatizado', 'Muay Thai', 'Estacionamento']
        },
        {
            id: 'goiania',
            name: "Tunico's Gym - Goiânia (Setor Bueno)",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Av. T-4, Setor Bueno - Goiânia, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 05h30 às 23h | Sáb: 08h às 18h | Dom: 09h às 15h',
            image: 'https://framerusercontent.com/images/HDU8BHLxA9BoF0vXkrKutBqvmGM.webp?width=1047&height=698',
            amenities: ['Padrão VIP', 'Maquinário Importado', 'Spinning Imersivo', 'Recovery']
        },
        {
            id: 'anapolis',
            name: "Tunico's Gym - Anápolis",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Av. São Francisco, 450 - Jundiaí, Anápolis, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h | Dom: 09h às 14h',
            image: 'https://framerusercontent.com/images/dY75PcZrZHhvHkzU2FKHHjgQ9A.jpg?width=2048&height=1365',
            amenities: ['Musculação Completa', 'Área Funcional', 'Lutas', 'Ar-Condicionado']
        },
        {
            id: 'aguas-lindas',
            name: "Tunico's Gym - Águas Lindas",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Av. JK, Quadra 15 Lote 01 - Jardim Brasília, Águas Lindas, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/ONl1Gku7YRsAKm9FcNlvPGGGOpo.webp?width=1398&height=932',
            amenities: ['Musculação', 'Spinning', 'Aulas Coletivas', 'Estacionamento']
        },
        {
            id: 'luziania',
            name: "Tunico's Gym - Luziânia",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Rua do Comércio, 120 - Centro, Luziânia, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/O7uWnLGr9cYijt64uP7l3uY1m58.webp?width=1046&height=697',
            amenities: ['Salão Cardio', 'Musculação Livre', 'FitDance', 'Vestiário']
        },
        {
            id: 'formosa',
            name: "Tunico's Gym - Formosa",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Av. Maestro João Luiz do Espírito Santo, 890 - Formosa, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/u6M2tcb9oQN1d2e77thMZy5vlQ.webp?width=1396&height=931',
            amenities: ['Musculação', 'Spinning', 'Treino Funcional', 'Ar-Condicionado']
        },
        {
            id: 'rio-verde',
            name: "Tunico's Gym - Rio Verde",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Av. Presidente Vargas, 1420 - Setor Central, Rio Verde, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 23h | Sáb: 08h às 18h',
            image: 'https://framerusercontent.com/images/b0YmzLKg7zyrsitY3OiO1XHBI.jpg?width=2048&height=1365',
            amenities: ['Aparelhos Biomecânicos', 'Área Lutas', 'Spinning', 'Vagas']
        },
        {
            id: 'jatai',
            name: "Tunico's Gym - Jataí",
            state: 'go',
            region: 'Goiás & Entorno',
            address: 'Rua Itarumã, 520 - Setor Epaminondas, Jataí, GO',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 06h às 22h | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/SP9kPz4YGYgD7Kv9bhMeCAjgiEg.jpg?width=2048&height=1365',
            amenities: ['Musculação Completa', 'Aulas Coletivas', 'Ar-Condicionado']
        },
        // BAHIA
        {
            id: 'lem-ba',
            name: "Tunico's Gym - Luís Eduardo Magalhães (LEM)",
            state: 'ba',
            region: 'Bahia',
            address: 'Rua Paraíba, 820 - Mimoso do Oeste, LEM - BA',
            phone: '+55 61 99853-5380',
            hours: 'Seg a Sex: 05h30 às 22h30 | Sáb: 08h às 17h',
            image: 'https://framerusercontent.com/images/MrAhCp9xziah6Qfv8T3evmMXQbk.jpg?width=2048&height=1365',
            amenities: ['Padrão Ouro', 'Musculação Pesada', 'Spinning', 'Ar-Condicionado Central']
        }
    ];

    /* ==========================================================================
       2. RENDERIZAÇÃO E FILTRO DE UNIDADES
       ========================================================================== */
    const unitsGrid = document.getElementById('unitsGrid');
    const unitSearchInput = document.getElementById('unitSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterTabs = document.querySelectorAll('.filter-tab');

    // Counters
    const countAll = document.getElementById('countAll');
    const countDf = document.getElementById('countDf');
    const countGo = document.getElementById('countGo');
    const countBa = document.getElementById('countBa');

    if (countAll) countAll.textContent = unitsData.length;
    if (countDf) countDf.textContent = unitsData.filter(u => u.state === 'df').length;
    if (countGo) countGo.textContent = unitsData.filter(u => u.state === 'go').length;
    if (countBa) countBa.textContent = unitsData.filter(u => u.state === 'ba').length;

    let activeFilter = 'all';
    let searchQuery = '';

    function renderUnits() {
        if (!unitsGrid) return;

        const filtered = unitsData.filter(unit => {
            const matchesFilter = (activeFilter === 'all') || (unit.state === activeFilter);
            const matchesSearch = unit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  unit.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  unit.region.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            unitsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--color-bg-card); border-radius: 12px; border: 1px solid var(--border-light);">
                    <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #fff; margin-bottom: 8px;">NENHUMA UNIDADE ENCONTRADA</h3>
                    <p style="color: var(--color-text-secondary); margin-bottom: 20px;">Tente pesquisar com outros termos ou limpe o campo de busca.</p>
                    <button class="btn btn-outline" id="resetSearchBtn">Limpar Busca</button>
                </div>
            `;
            const resetBtn = document.getElementById('resetSearchBtn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    unitSearchInput.value = '';
                    searchQuery = '';
                    clearSearchBtn.style.display = 'none';
                    renderUnits();
                });
            }
            return;
        }

        unitsGrid.innerHTML = filtered.map(unit => `
            <div class="unit-card" data-id="${unit.id}">
                <div class="unit-img-box">
                    <img src="${unit.image}" alt="${unit.name}" loading="lazy">
                    <span class="unit-region-pill">${unit.region}</span>
                </div>
                <div class="unit-body">
                    <h3 class="unit-name">${unit.name}</h3>
                    <p class="unit-address">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${unit.address}</span>
                    </p>

                    <div class="unit-amenities">
                        ${unit.amenities.map(a => `<span class="amenity-chip">${a}</span>`).join('')}
                    </div>

                    <div class="unit-actions">
                        <button class="btn btn-primary btn-sm view-unit-btn" data-id="${unit.id}">
                            Ver Detalhes
                        </button>
                        <a href="#freepass" class="btn btn-outline btn-sm select-unit-lead" data-unit-name="${unit.name}">
                            Free Pass
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach listeners to "Ver Detalhes"
        document.querySelectorAll('.view-unit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                openUnitDetailModal(id);
            });
        });

        // Attach listeners to "Free Pass" button on card
        document.querySelectorAll('.select-unit-lead').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const name = e.currentTarget.getAttribute('data-unit-name');
                const selectElement = document.getElementById('preferredUnit');
                if (selectElement) {
                    // Try to match value or add temporary option
                    let matched = false;
                    for (let opt of selectElement.options) {
                        if (opt.value.includes(name) || name.includes(opt.value)) {
                            selectElement.value = opt.value;
                            matched = true;
                            break;
                        }
                    }
                    if (!matched) {
                        const newOpt = new Option(name, name, true, true);
                        selectElement.add(newOpt);
                    }
                }
            });
        });
    }

    // Search input listener
    if (unitSearchInput) {
        unitSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
            }
            renderUnits();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            unitSearchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            renderUnits();
        });
    }

    // Filter tab buttons
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.getAttribute('data-filter');
            renderUnits();
        });
    });

    renderUnits();

    /* ==========================================================================
       3. MODAL DE DETALHES DA UNIDADE
       ========================================================================== */
    const unitDetailModal = document.getElementById('unitDetailModal');
    const unitModalContent = document.getElementById('unitModalContent');
    const closeUnitModal = document.getElementById('closeUnitModal');

    function openUnitDetailModal(unitId) {
        const unit = unitsData.find(u => u.id === unitId);
        if (!unit || !unitModalContent) return;

        unitModalContent.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: start;">
                <div style="border-radius: 8px; overflow: hidden; height: 100%; min-height: 240px;">
                    <img src="${unit.image}" alt="${unit.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                    <span class="section-badge" style="margin-bottom: 8px;">${unit.region}</span>
                    <h2 style="font-family: var(--font-heading); font-size: 2rem; color: #fff; margin-bottom: 12px; line-height: 1.1;">
                        ${unit.name}
                    </h2>
                    
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.5; margin-bottom: 14px;">
                        <strong>Endereço:</strong><br>${unit.address}
                    </p>

                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.5; margin-bottom: 18px;">
                        <strong>Horário de Funcionamento:</strong><br>${unit.hours}
                    </p>

                    <div style="margin-bottom: 24px;">
                        <strong style="display: block; font-size: 0.82rem; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 8px;">Diferenciais desta unidade:</strong>
                        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                            ${unit.amenities.map(a => `<span class="amenity-chip" style="background: rgba(255,255,255,0.1); color: #fff;">${a}</span>`).join('')}
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <a href="https://wa.me/5561998535380?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20unidade%20${encodeURIComponent(unit.name)}" target="_blank" class="btn btn-primary btn-block">
                            Falar com Gerente no WhatsApp
                        </a>
                        <button class="btn btn-outline btn-block" id="modalChooseUnitBtn" data-name="${unit.name}">
                            Resgatar 7 Dias Grátis Aqui
                        </button>
                    </div>
                </div>
            </div>
        `;

        if (unitDetailModal) unitDetailModal.classList.add('open');

        const chooseBtn = document.getElementById('modalChooseUnitBtn');
        if (chooseBtn) {
            chooseBtn.addEventListener('click', (e) => {
                const name = e.currentTarget.getAttribute('data-name');
                const selectElement = document.getElementById('preferredUnit');
                if (selectElement) {
                    selectElement.value = name;
                }
                unitDetailModal.classList.remove('open');
                window.location.hash = '#freepass';
            });
        }
    }

    if (closeUnitModal && unitDetailModal) {
        closeUnitModal.addEventListener('click', () => unitDetailModal.classList.remove('open'));
        unitDetailModal.addEventListener('click', (e) => {
            if (e.target === unitDetailModal) unitDetailModal.classList.remove('open');
        });
    }

    /* ==========================================================================
       4. FORMULÁRIO DE FREE PASS COM VALIDAÇÃO & VOUCHER WHATSAPP
       ========================================================================== */
    const freePassForm = document.getElementById('freePassForm');
    const phoneInput = document.getElementById('phoneWhatsApp');
    const successModal = document.getElementById('successModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');

    // Máscara de Telefone (61) 99999-9999
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            if (v.length > 11) v = v.slice(0, 11);
            if (v.length > 6) {
                e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
            } else if (v.length > 2) {
                e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
            } else if (v.length > 0) {
                e.target.value = `(${v}`;
            }
        });
    }

    if (freePassForm) {
        freePassForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const name = document.getElementById('fullName');
            const phone = document.getElementById('phoneWhatsApp');
            const email = document.getElementById('userEmail');
            const unit = document.getElementById('preferredUnit');

            // Reset error states
            document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

            // Name check
            if (!name.value.trim() || name.value.trim().length < 3) {
                name.closest('.form-group').classList.add('has-error');
                isValid = false;
            }

            // Phone check
            const rawPhone = phone.value.replace(/\D/g, '');
            if (rawPhone.length < 10) {
                phone.closest('.form-group').classList.add('has-error');
                isValid = false;
            }

            // Email check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.closest('.form-group').classList.add('has-error');
                isValid = false;
            }

            // Unit check
            if (!unit.value) {
                unit.closest('.form-group').classList.add('has-error');
                isValid = false;
            }

            if (!isValid) return;

            // Generate random voucher code
            const randomCode = 'TG-' + Math.floor(1000 + Math.random() * 9000);

            // Populate Modal
            const modalUserName = document.getElementById('modalUserName');
            const modalUnitName = document.getElementById('modalUnitName');
            const modalVoucherCode = document.getElementById('modalVoucherCode');
            const modalWhatsAppLink = document.getElementById('modalWhatsAppLink');

            if (modalUserName) modalUserName.textContent = name.value.trim().split(' ')[0];
            if (modalUnitName) modalUnitName.textContent = unit.value;
            if (modalVoucherCode) modalVoucherCode.textContent = randomCode;

            // WhatsApp link with prefilled voucher
            const cleanPhone = '5561998535380';
            const textMsg = encodeURIComponent(
                `Olá equipe Tunico's Gym! Meu nome é ${name.value.trim()}, acabei de me cadastrar no site e gerei meu voucher de 7 Dias Grátis: [${randomCode}]. Gostaria de ativar meu Free Pass para treinar na unidade ${unit.value}.`
            );
            if (modalWhatsAppLink) {
                modalWhatsAppLink.href = `https://wa.me/${cleanPhone}?text=${textMsg}`;
            }

            // Open modal
            if (successModal) successModal.classList.add('open');

            // Clear form
            freePassForm.reset();
        });
    }

    if (closeSuccessModal && successModal) {
        closeSuccessModal.addEventListener('click', () => successModal.classList.remove('open'));
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) successModal.classList.remove('open');
        });
    }

    /* ==========================================================================
       5. COUNTDOWN TIMER DA PROMOÇÃO
       ========================================================================== */
    const countdownTimer = document.getElementById('countdownTimer');
    if (countdownTimer) {
        // Define target to midnight of current day
        function updateTimer() {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setHours(23, 59, 59, 999);

            const diff = tomorrow - now;
            if (diff <= 0) {
                countdownTimer.textContent = '00h 00m 00s';
                return;
            }

            const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
            const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

            countdownTimer.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    /* ==========================================================================
       6. ACCORDION DE PERGUNTAS FREQUENTES (FAQ)
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(other => other.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        }
    });

    /* ==========================================================================
       7. MOBILE MENU TOGGLE & SMOOTH SCROLL
       ========================================================================== */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link, .mobile-nav-cta a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       8. MODAL DE AULAS COLETIVAS (QUICK PREVIEW)
       ========================================================================== */
    const classDetailsMap = {
        dancas: {
            title: 'DANÇAS & RITMOS (FITDANCE & ZUMBA)',
            desc: 'Aulas cheias de energia combinando ritmos latinos, pop, funk e axé. Excelente para condicionamento aeróbico, queima calórica e aumento da coordenação motora.',
            benefits: ['Gasto de até 600 kcal por sessão', 'Melhora da flexibilidade e ritmo', 'Redução do estresse e liberação de endorfina', 'Ambiente descontraído para todos os níveis'],
            intensity: 'Média • 50 minutos'
        },
        spinning: {
            title: 'SPINNING INDOOR CYCLE',
            desc: 'Treino cardiovascular potente em bicicletas estacionárias de alta performance. Comandado por professores certificados e trilha sonora estimulante.',
            benefits: ['Alta queima calórica (até 800 kcal)', 'Fortalecimento intenso de pernas, glúteos e abdômen', 'Aumento drástico da resistência cardiorrespiratória', 'Baixo impacto articular'],
            intensity: 'Alta • 45 minutos'
        },
        lutas: {
            title: 'LUTAS (MUAY THAI, JIU-JITSU & BOXE)',
            desc: 'Desenvolva autodefesa, força mental, reflexos rápidos e resistência física sob a tutela de instrutores faixas-pretas e campeões.',
            benefits: ['Defesa pessoal prática e funcional', 'Tonificação muscular de braços, ombros e tronco', 'Alívio extremo de ansiedade e tensão diária', 'Aulas separadas para iniciantes e avançados'],
            intensity: 'Intensa • 60 minutos'
        },
        aerobicos: {
            title: 'AERÓBICOS & HIIT FUNCIONAL',
            desc: 'Circuitos dinâmicos com peso do corpo, kettlebells, cordas navais e esteiras. Treino focado em aceleração metabólica EPOC.',
            benefits: ['Queima contínua de gordura pós-treino', 'Aumento da potência e agilidade muscular', 'Treinos rápidos e altamente eficientes'],
            intensity: 'Alta • 40 minutos'
        },
        alongamento: {
            title: 'ALONGAMENTO & MOBILIDADE',
            desc: 'Trabalho focado na fáscia muscular, respiração diafragmática, postura e amplitude de movimentos articulares.',
            benefits: ['Alívio imediato de dores nas costas e pescoço', 'Recuperação muscular pós-musculação pesada', 'Melhora da postura corporal'],
            intensity: 'Leve • 30 minutos'
        },
        abdominal: {
            title: 'ABDOMINAL & FORTALECIMENTO CORE',
            desc: 'Sessões concentradas para estabilização de pelve, lombar e fortalecimento da parede abdominal inteira.',
            benefits: ['Definição muscular abdominal', 'Proteção da coluna vertebral contra hérnias', 'Melhora da postura em exercícios pesados'],
            intensity: 'Média • 30 minutos'
        }
    };

    document.querySelectorAll('.open-class-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const classKey = e.currentTarget.getAttribute('data-class');
            const data = classDetailsMap[classKey];
            if (!data || !unitModalContent || !unitDetailModal) return;

            unitModalContent.innerHTML = `
                <div style="padding: 10px 0;">
                    <span class="section-badge" style="margin-bottom: 8px;">MODALIDADE TUNICO'S GYM</span>
                    <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; margin-bottom: 8px; line-height: 1;">
                        ${data.title}
                    </h2>
                    <p style="color: var(--color-accent-silver); font-size: 0.85rem; font-weight: 700; margin-bottom: 16px;">
                        ${data.intensity}
                    </p>
                    <p style="color: var(--color-text-secondary); font-size: 1rem; line-height: 1.6; margin-bottom: 20px;">
                        ${data.desc}
                    </p>

                    <h4 style="font-size: 0.9rem; text-transform: uppercase; color: #fff; letter-spacing: 1px; margin-bottom: 10px;">
                        Principais Benefícios:
                    </h4>
                    <ul style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 8px;">
                        ${data.benefits.map(b => `<li style="color: var(--color-text-secondary); font-size: 0.9rem; display: flex; align-items: center; gap: 8px;"><span style="color: #fff; font-weight: 900;">✓</span> ${b}</li>`).join('')}
                    </ul>

                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <a href="#freepass" class="btn btn-primary btn-block" id="classFreePassAction">
                            Experimentar Esta Aula no Free Pass de 7 Dias
                        </a>
                    </div>
                </div>
            `;

            unitDetailModal.classList.add('open');

            const classFreePassAction = document.getElementById('classFreePassAction');
            if (classFreePassAction) {
                classFreePassAction.addEventListener('click', () => {
                    unitDetailModal.classList.remove('open');
                });
            }
        });
    });

    console.log("Tunico's Gym Engine initialized. 31 units loaded, monochrome black & white theme active.");
});
