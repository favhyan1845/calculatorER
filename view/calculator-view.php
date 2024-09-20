<form id="submitCrearUrl" onsubmit="return false">
		<div class='col-sm-12'>
				<div class='form-row'>
					<div class='col-md-12'>
					<div class="table-responsive">
					<table class="table">
						<thead>
						<tr>
							<th class="first-th">N°</th>
							<th>N° Likes</th>
							<th>N° Comentarios</th>
							<th>N° Compartidos</th>
						</tr>
						</thead>
					<tbody>
						<?php
						for($i = 1; $i < 11 ; $i++){
						?>
							<tr>
								<td><?php echo $i; ?></td>
								<td><input type="number" class="form-control" name="view_<?php echo $i; ?>" id="view_<?php echo $i; ?>" min="1" max="7"></td>
								<td><input type="number" class="form-control" name="like_view_<?php echo $i; ?>" id="like_view_<?php echo $i; ?>" min="1" max="7"></td>
								<td><input type="number" class="form-control" name="comment_view_<?php echo $i; ?>" id="comment_view_<?php echo $i; ?>" min="1" max="7"></td>
							</tr>						
						<?php
						}
						?>
						<tr>
							<td colspan="3"><label>Followers</label></td>
							<td><input type="number" class="form-control" name="n_follow_view_input" id="n_follow_view_input"></td>
						</tr>
					<tr>
						<td><label>AVG</label></td>
						<td>
							<input type="hidden" class="form-control" name="results_view" id="results_view">
							<strong><span name="result_view" id="result_view"></span></strong>
						</td>
						<td>
							<input type="hidden" class="form-control" name="like_results_view" id="like_results_view">
							<strong><span name="like_result_view" id="like_result_view"></span></strong>
						</td>
						<td>
							<input type="hidden" class="form-control" name="comment_results_view" id="comment_results_view">
							<strong><span name="comment_result_view" id="comment_result_view"></span></strong>
						</td>
					</tr>
					<tr>
						<td><label>ER</label></td>
						<td colspan="3">
							<input type="hidden" class="form-control" name="ers_view" id="ers_view">
							<strong><h3 name="er_view" id="er_view"></h3></strong>
						</td>
					</tr>
					</tbody>
					</table>
					</div>
				</div>
		</div>
</form>