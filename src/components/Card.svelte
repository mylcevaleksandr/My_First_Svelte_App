<div class="card">
    <slot><!-- optional fallback --></slot>
</div>

<style>
.card {
    background-color: #fff;
    color: #333;
    border-radius: 15px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
}

@media screen and (max-width:425px) {
    .card {
        padding: 40px 10px;
        text-align: center;
    }
}
</style>
