<div class='form-row'>
	<div class='col-md-12'>
		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th class="first-th">N°</th>
						<th>N° Likes</th>
						<th>N° Comentarios</th>
					</tr>
				</thead>
				<tbody>
					<?php
					for($i = 1; $i < 11 ; $i++){
					?>
						<tr>
							<td><?php echo $i; ?></td>
							<td><input type="number" class="form-control" name="like_<?php echo $i; ?>" id="like_<?php echo $i; ?>" min="1" max="7"></td>
							<td><input type="number" class="form-control" name="comment_<?php echo $i; ?>" id="comment_<?php echo $i; ?>" min="1" max="7"></td>
						</tr>						
					<?php
					}
					?>
					<tr>
						<td colspan="2"><label>Followers<label></td>
						<td><input type="number" class="form-control" name="n_follow" id="n_follow"></td>
					</tr>
					<tr>
						<td><label>AVG</label></td>
						<td class="result">
							<input type="hidden" class="form-control" name="like_results" id="like_results">
							<strong><span name="like_result" id="like_result"></span></strong>
						</td>
						<td class="result">
							<input type="hidden" class="form-control" name="comment_results" id="comment_results">
							<strong><span name="comment_result" id="comment_result"></span></strong>
						</td>
					</tr>
					<tr>
						<td colspan="2"><label>ER</label></td>
						<td class="result">
							<input type="hidden" class="form-control" name="ers" id="ers">
							<strong><h4 name="er" id="er"></h4></strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>