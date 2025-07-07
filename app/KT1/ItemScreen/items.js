const items = [
    {
        "mahoa": "1",
        "maloai": "Hoa-Cuc",
        "tenhoa": "Đón xuân",
        "giaban": "50000",
        "hinh": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        "mota": "Hoa cúc các màu: trắng, vàng, cam"
    },
    {
        "mahoa": "2",
        "maloai": "Hoa-Cuc",
        "tenhoa": "Hồn nhiên",
        "giaban": "60000",
        "hinh": "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400&h=300&fit=crop",
        "mota": "Hoa cúc vàng, cam. lá măng"
    },
    {
        "mahoa": "3",
        "maloai": "Hoa-Cuc",
        "tenhoa": "Tím thuỷ chung",
        "giaban": "45000",
        "hinh": "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
        "mota": "Hoa cúc tím"
    },
    {
        "mahoa": "4",
        "maloai": "Hoa-Cuc",
        "tenhoa": "Nét duyên tím hoa cà",
        "giaban": "40000",
        "hinh": "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
        "mota": "Hoa cúc màu tím nhạt"
    },
    {
        "mahoa": "5",
        "maloai": "Hoa-Cuc",
        "tenhoa": "Cùng khoe sắc",
        "giaban": "70000",
        "hinh": "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=300&fit=crop",
        "mota": "Hoa cúc các màu: trắng, vàng, cam"
    },
    {
        "mahoa": "6",
        "maloai": "Hoa-Cuc",
        "tenhoa": "Trắng thơ ngây",
        "giaban": "65000",
        "hinh": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        "mota": "Hoa cúc trắng"
    },
    {
        "mahoa": "7",
        "maloai": "Hoa-Cuoi",
        "tenhoa": "Dây tơ hồng",
        "giaban": "250000",
        "hinh": "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
        "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
    },
    {
        "mahoa": "8",
        "maloai": "Hoa-Cuoi",
        "tenhoa": "Cầu thuỷ tinh",
        "giaban": "220000",
        "hinh": "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop",
        "mota": "Hoa hồng và hoa thuỷ tiên trắng"
    },
    {
        "mahoa": "9",
        "maloai": "Hoa-Cuoi",
        "tenhoa": "Duyên thầm",
        "giaban": "260000",
        "hinh": "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=300&fit=crop",
        "mota": "Hoa cúc trắng, baby, lá măng"
    },
    {
        "mahoa": "10",
        "maloai": "Hoa-Cuoi",
        "tenhoa": "Đâm chồi nảy lộc",
        "giaban": "180000",
        "hinh": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "mota": "Hoa hồng trắng và các loại lá măng"
    },
    {
        "mahoa": "11",
        "maloai": "Hoa-Cuoi",
        "tenhoa": "Hoà quyện",
        "giaban": "270000",
        "hinh": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        "mota": "Hoa hồng trắng, lá thuỷ tùng"
    },
    {
        "mahoa": "12",
        "maloai": "Hoa-Cuoi",
        "tenhoa": "Nồng nàn",
        "giaban": "210000",
        "hinh": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=300&fit=crop",
        "mota": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
    },
    {
        "mahoa": "13",
        "maloai": "Hoa-Hong",
        "tenhoa": "Together",
        "giaban": "120000",
        "hinh": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        "mota": "Hồng xác pháo, cúc tím"
    },
    {
        "mahoa": "14",
        "maloai": "Hoa-Hong",
        "tenhoa": "Long trip",
        "giaban": "85000",
        "hinh": "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop",
        "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
    },
    {
        "mahoa": "15",
        "maloai": "Hoa-Hong",
        "tenhoa": "Beautiful life",
        "giaban": "100000",
        "hinh": "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=300&fit=crop",
        "mota": "Hoa hồng đỏ, lá măng, lá đệm"
    },
    {
        "mahoa": "16",
        "maloai": "Hoa-Hong",
        "tenhoa": "Morning Sun",
        "giaban": "75000",
        "hinh": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=300&fit=crop",
        "mota": "Hoa hồng vàng"
    },
    {
        "mahoa": "17",
        "maloai": "Hoa-Hong",
        "tenhoa": "Pretty Bloom",
        "giaban": "65000",
        "hinh": "https://images.unsplash.com/photo-1517512006864-6d73b0b8271e?w=400&h=300&fit=crop",
        "mota": "Hoa hồng trắng và lá thông"
    },
    {
        "mahoa": "18",
        "maloai": "Hoa-Hong",
        "tenhoa": "Red Rose",
        "giaban": "45000",
        "hinh": "https://images.unsplash.com/photo-1518621845515-89f3dd2c9137?w=400&h=300&fit=crop",
        "mota": "Hoa hồng đỏ và lá măng"
    },
    {
        "mahoa": "19",
        "maloai": "Hoa-Xuan",
        "tenhoa": "Vấn vương",
        "giaban": "150000",
        "hinh": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop",
        "mota": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
    },
    {
        "mahoa": "20",
        "maloai": "Hoa-Xuan",
        "tenhoa": "Nắng nhẹ nhàng",
        "giaban": "50000",
        "hinh": "https://images.unsplash.com/photo-1595814432314-90095f342694?w=400&h=300&fit=crop",
        "mota": "Hoa cúc xanh, hoa lys vàng, lá đệm"
    },
    {
        "mahoa": "21",
        "maloai": "Hoa-Xuan",
        "tenhoa": "Thanh tao",
        "giaban": "120000",
        "hinh": "https://images.unsplash.com/photo-1518621845515-89f3dd2c9137?w=400&h=300&fit=crop",
        "mota": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
    },
    {
        "mahoa": "22",
        "maloai": "Hoa-Xuan",
        "tenhoa": "Tinh khiết",
        "giaban": "110000",
        "hinh": "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
        "mota": "Hồng trắng và salem"
    },
    {
        "mahoa": "23",
        "maloai": "Hoa-Xuan",
        "tenhoa": "Mùa xuân chín",
        "giaban": "150000",
        "hinh": "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400&h=300&fit=crop",
        "mota": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
    },
    {
        "mahoa": "24",
        "maloai": "Hoa-Xuan",
        "tenhoa": "Rực rỡ nắng vàng",
        "giaban": "75000",
        "hinh": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=300&fit=crop",
        "mota": "Hồng vàng và cúc vàng"
    },
    {
        "mahoa": "25",
        "maloai": "Hoa-Hong",
        "tenhoa": "Love Candy",
        "giaban": "95000",
        "hinh": "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=300&fit=crop",
        "mota": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
    },
    {
        "mahoa": "26",
        "maloai": "Hoa-Cuoi",
        "tenhoa": "Happy Wedding",
        "giaban": "210000",
        "hinh": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "mota": "Hoa hồng môn và các loại lá"
    },
    {
        "mahoa": "27",
        "maloai": "Hoa-Cuc",
        "tenhoa": "Cúc nhiệt đới",
        "giaban": "150000",
        "hinh": "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop",
        "mota": "Cúc vàng - hồng cam - lá măng"
    }
]

export default items;
